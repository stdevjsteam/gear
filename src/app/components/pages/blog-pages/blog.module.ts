import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import {BlogComponent} from './blog.component';
import {RouterModule, Routes} from '@angular/router';
import { BlogpostsComponent } from './blogposts/blogposts.component';
import {PageHeaderComponent} from '../../page-header/page-header.component';
import {SharedModule} from '../../../../shared/modules/shared.module';

const routes: Routes = [
  {
    path: '', component: BlogComponent, children: [
      {path: '', redirectTo: '/blog/posts', pathMatch: 'full'},
      {path: 'posts',
        component: BlogpostsComponent,
        data: { h1: 'Gear.am Blog',
          h3: 'Read Latest Auto News & Reviews',
          className: 'm-blogTwo',
          routerLink: '/blog/posts'}
      },
      {path: 'article/:id',
        component: ArticleComponent,
        data: { h1: 'Gear.am Blog',
          h3: 'Read Latest Auto News & Reviews',
          className: 'm-article',
          routerLink: '/blog/article/:id'}
      }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    BlogComponent,
    ArticleComponent,
    BlogpostsComponent,
  ]
})
export class BlogModule { }
