import fs from "fs";
import matter, { stringify } from "gray-matter";
import path from "path";

const postsDirectory = path.join(process.cwd(), "posts");

export type Posts = {
  id: string;
  date: string;
  title: string;
};

export function getSortedPostsData(): Posts[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName): Posts => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    console.log(matterResult.data["title"])
    console.log(typeof matterResult.data["title"])

    console.log(matterResult.data["date"].toISOString())
    console.log(typeof matterResult.data["date"].toISOString())

    return {
      id,
      date: matterResult.data["date"].toISOString(),
      title: matterResult.data["title"]
    }
  });

  console.log(allPostsData)

  return allPostsData.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    // if (a.date < b.date) {
    if (dateA < dateB) {
      return 1;
    } else {
      return -1;
    }
  });
}
