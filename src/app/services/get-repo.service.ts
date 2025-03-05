import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Repository } from '../models/repo.type';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetRepoService {
  http = inject(HttpClient); // Inject HttpClient
  constructor() { }

  getRepositories(reposUrl: string, page: number, perPage: number) {
    const url = `${reposUrl}?page=${page}&per_page=${perPage}`;
    return this.http.get<Repository[]>(url, { observe: 'response' }).pipe(
      map(response => {
        const repos = response.body || [];
        const linkHeader = response.headers.get('Link');
        let totalPages = 1;
        
        if (linkHeader) {
          const lastLink = linkHeader.split(',').find(l => l.includes('rel="last"'));
          if (lastLink) {
            const lastPageUrl = lastLink.split(';')[0].trim().slice(1, -1);
            const url = new URL(lastPageUrl);
            totalPages = Number(url.searchParams.get('page')) || 1;
          }
        }
        
        return { repos, totalPages };
      })
    );
  }
}
