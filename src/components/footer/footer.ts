import { Component } from '@angular/core';
import { LINK_GITHUB_REPO } from '../../app/app.constants';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected githubRepoLink = LINK_GITHUB_REPO;
}
