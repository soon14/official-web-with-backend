import { Pipe, PipeTransform } from '@angular/core';
import { ArticleType, ArticleTypeLabel } from '@libs/enums/article';

@Pipe({
  name: 'articleType'
})
export class ArticleTypePipe implements PipeTransform {

  transform(typeList: ArticleType[]): string {
    return typeList.map(type => ArticleTypeLabel[type]).join(', ')
  }

}
