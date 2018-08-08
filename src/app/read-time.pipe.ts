import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "readTime"
})
export class ReadTimePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const averageReadingTime = 200; // Humans read an average of 200 words per minute
    const cleanedPassage = value
      .replace(/(<([^>]+)>)/gi, "")
      .split(" ")
      .filter(el => el.trim() !== "");
    const timeInMinutes = cleanedPassage.length / averageReadingTime;

    return timeInMinutes < 1
      ? `${Math.round(timeInMinutes * 60)} seconds`
      : `${Math.round(timeInMinutes)}minutes`;
  }
}
