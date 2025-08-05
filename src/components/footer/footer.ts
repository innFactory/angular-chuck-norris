import { Component } from '@angular/core';
import { URL_GITHUB_REPO } from '../../app/app.constants';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected githubRepoLink = URL_GITHUB_REPO;
}
