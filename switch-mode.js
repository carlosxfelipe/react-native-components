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
} else if (mode === "build") {
  console.log("🚀 Alternando para modo Build...");

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

  // Adiciona `main` e `types` para o Build
  packageJson.main = "dist/index.js";
  packageJson.types = "dist/index.d.ts";
} else {
  console.error("❌ Modo inválido! Use 'storybook' ou 'build'.");
  process.exit(1);
}

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + "\n");

console.log(`✅ Modo ${mode} configurado com sucesso!`);
