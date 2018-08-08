import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "stripHtml"
})
export class StripHtmlPipe implements PipeTransform {
  transform(value: String, args?: any): any {
    return value.replace(/(<([^>]+)>)/gi, "").substring(0, 250);
  }
}
