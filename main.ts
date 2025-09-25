import * as fs from "fs";

interface TestCase {
  panelW: number;
  panelH: number;
  roofW: number;
  roofH: number;
  expected: number;
}

interface TestData {
  testCases: TestCase[];
}

function calculatePanels(
  panelWidth: number,
  panelHeight: number,
  roofWidth: number,
  roofHeight: number
): number {
  // Implementa acá tu solución

  const panelsPerWidth = Math.floor(roofWidth / panelWidth);
  const panelsPerHeight = Math.floor(roofHeight / panelHeight);
  const partialResult = panelsPerWidth * panelsPerHeight;

  let newRoofWidth = roofWidth % panelWidth;
  let newRoofHeight = roofHeight % panelHeight;

  if (newRoofWidth == 0) {
    newRoofWidth = roofWidth;
    const newPanelHeight = panelWidth;
    const newPanelWidth = panelHeight;

    const newPanelsFitHeight = Math.floor(newRoofHeight / newPanelHeight);
    const newPanelsFitWidth = Math.floor(newRoofWidth / newPanelWidth);

    const newPartialResult = newPanelsFitHeight * newPanelsFitWidth;

    const finalResult = partialResult + newPartialResult;
    return Math.floor(finalResult);
  }
  return partialResult;
}

function main(): void {
  console.log("🐕 Wuuf wuuf wuuf 🐕");
  console.log("================================\n");

  runTests();
}

function runTests(): void {
  const data: TestData = JSON.parse(
    fs.readFileSync("test_cases.json", "utf-8")
  );
  const testCases = data.testCases;

  console.log("Corriendo tests:");
  console.log("-------------------");

  testCases.forEach((test: TestCase, index: number) => {
    const result = calculatePanels(
      test.panelW,
      test.panelH,
      test.roofW,
      test.roofH
    );
    const passed = result === test.expected;

    console.log(`Test ${index + 1}:`);
    console.log(
      `  Panels: ${test.panelW}x${test.panelH}, Roof: ${test.roofW}x${test.roofH}`
    );
    console.log(`  Expected: ${test.expected}, Got: ${result}`);
    console.log(`  Status: ${passed ? "✅ PASSED" : "❌ FAILED"}\n`);
  });
}

main();
