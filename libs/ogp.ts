import { Canvas, createCanvas, registerFont } from "canvas";
import path from "path";
import fs from "fs";

const createTextLine = (canvas: Canvas, text: string): {
  line: string;
  remaining: string;
} => {
  const context = canvas.getContext("2d");
  const MAX_WIDTH = 1000 as const;

  for (let i = 0; i < text.length; i += 1) {
    const line = text.substring(0, i + 1);

    if (context.measureText(line).width > MAX_WIDTH) {
      return {
        line,
        remaining: text.substring(i + 1),
      };
    }
  }

  return {
    line: text,
    remaining: "",
  };
};

const createTextLines = (canvas: Canvas, text: string): string[] => {
  const lines: string[] = [];
  let currentText = text;

  while (currentText !== "") {
    const separatedText = createTextLine(canvas, currentText);
    lines.push(separatedText.line);
    currentText = separatedText.remaining;
  }

  return lines;
};

// create ogp image returns its path
export function createOgpImage(pageId: string, text: string): string {
  const WIDTH = 1200 as const;
  const HEIGHT = 630 as const;
  const DX = 0 as const;
  const DY = 0 as const;
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FFF";
  ctx.fillRect(DX, DY, WIDTH, HEIGHT);

  registerFont(path.resolve("./fonts/ipaexg.ttf"), {
    family: "ipaexg",
  });

  ctx.font = "40px ipaexg";
  ctx.fillStyle = "#000000";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Shallow Thought", 600, 550)

  ctx.font = "60px ipaexg";
  const lines = createTextLines(canvas, text);
  lines.forEach((line, index) => {
    const y = 280 + 80 * (index - (lines.length - 1) / 2);
    ctx.fillText(line, 600, y);
  });

  const buffer = canvas.toBuffer();
  const filepath = path.resolve(`./public/ogp/${pageId}.png`)
  fs.writeFileSync(filepath, buffer);
  return filepath
}
