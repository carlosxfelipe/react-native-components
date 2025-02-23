const fs = require("fs");

const mode = process.argv[2]; // "storybook" ou "build"
const packageJsonPath = "./package.json";

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

if (mode === "storybook") {
  console.log("🔄 Alternando para modo Storybook...");

  // Move `react`, `react-dom` e `react-native` de `peerDependencies` para `dependencies`
  packageJson.dependencies = packageJson.dependencies || {};
  packageJson.dependencies["react"] = "18.2.0";
  packageJson.dependencies["react-dom"] = "18.2.0";
  packageJson.dependencies["react-native"] = "0.74.5";

  // Remove de `peerDependencies`
  if (packageJson.peerDependencies) {
    delete packageJson.peerDependencies["react"];
    delete packageJson.peerDependencies["react-dom"];
    delete packageJson.peerDependencies["react-native"];
  }

  // Remove `main` e `types` para o Storybook funcionar
  delete packageJson.main;
  delete packageJson.types;

  // Restaurando dependências removidas anteriormente
  const dependenciesToRestore = {
    "@expo/metro-runtime": "~3.2.3",
    "@expo/vector-icons": "^14.0.3",
    "@types/react": "~18.2.79",
    expo: "~51.0.39",
    "expo-constants": "~16.0.2",
    "react-native-web": "^0.19.10",
  };

  Object.entries(dependenciesToRestore).forEach(([dep, version]) => {
    packageJson.dependencies[dep] = version;
  });

  const devDependenciesToRestore = {
    "cross-env": "^7.0.3",
    "@gorhom/bottom-sheet": "^4.6.4",
    "@react-native-async-storage/async-storage": "1.23.1",
    "@react-native-community/datetimepicker": "8.0.1",
    "@react-native-community/slider": "4.5.2",
    "babel-loader": "^9.1.3",
    "react-native-gesture-handler": "~2.16.1",
    "react-native-reanimated": "~3.10.1",
    "react-native-safe-area-context": "4.10.5",
    "react-native-svg": "15.2.0",
  };

  packageJson.devDependencies = packageJson.devDependencies || {};
  Object.entries(devDependenciesToRestore).forEach(([dep, version]) => {
    packageJson.devDependencies[dep] = version;
  });
} else if (mode === "build") {
  console.log("🚀 Alternando para modo Build...");

  // Remove dependências desnecessárias do pacote publicado
  const dependenciesToRemove = [
    "@expo/metro-runtime",
    "expo",
    "expo-constants",
    "@expo/vector-icons",
    "react-native-web",
    "@types/react",
  ];
  dependenciesToRemove.forEach((dep) => {
    if (packageJson.dependencies?.[dep]) {
      delete packageJson.dependencies[dep];
    }
  });

  // Move `react`, `react-dom` e `react-native` para `peerDependencies`
  packageJson.peerDependencies = packageJson.peerDependencies || {};
  packageJson.peerDependencies["react"] = ">=18.2.0";
  packageJson.peerDependencies["react-dom"] = ">=18.2.0";
  packageJson.peerDependencies["react-native"] = ">=0.74.5";

  // Remove de `dependencies`
  if (packageJson.dependencies) {
    delete packageJson.dependencies["react"];
    delete packageJson.dependencies["react-dom"];
    delete packageJson.dependencies["react-native"];
  }

  // Adiciona `react-native` em `devDependencies` para que TypeScript funcione no build
  packageJson.devDependencies = packageJson.devDependencies || {};
  packageJson.devDependencies["react-native"] = "0.74.5";
  packageJson.devDependencies["@types/react"] = "^18.2.0";

  // Adiciona `main` e `types` para o Build
  packageJson.main = "dist/index.js";
  packageJson.types = "dist/index.d.ts";

  // Move Storybook para `optionalDependencies` (para não ser instalado por usuários)
  packageJson.optionalDependencies = packageJson.optionalDependencies || {};
  const storybookPackages = [
    "@storybook/addon-ondevice-actions",
    "@storybook/addon-ondevice-controls",
    "@storybook/react-native",
  ];
  storybookPackages.forEach((pkg) => {
    if (packageJson.devDependencies?.[pkg]) {
      packageJson.optionalDependencies[pkg] = packageJson.devDependencies[pkg];
      delete packageJson.devDependencies[pkg];
    }
  });

  // Mantém apenas as devDependencies essenciais
  const allowedDevDependencies = [
    "@babel/core",
    "@types/node",
    "@types/react",
    "typescript",
    "react-native",
  ];

  packageJson.devDependencies = Object.keys(packageJson.devDependencies)
    .filter((dep) => allowedDevDependencies.includes(dep))
    .reduce((acc, dep) => {
      acc[dep] = packageJson.devDependencies[dep];
      return acc;
    }, {});

  // Garante que nenhuma dependência seja instalada dentro do pacote no modo Build
  packageJson.dependencies = {};
} else {
  console.error("❌ Modo inválido! Use 'storybook' ou 'build'.");
  process.exit(1);
}

// Salva as alterações no package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + "\n");

console.log(`✅ Modo ${mode} configurado com sucesso!`);
