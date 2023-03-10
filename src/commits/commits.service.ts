import { Injectable } from '@nestjs/common';
import { CommitQueryDto } from './dto/commit-query.dto';
import { Commit } from './interfaces/Commit';

@Injectable()
export class CommitsService {
    private commits: Commit[] = [];

    private async create(url: string) {
        try {
            this.commits = []
            const response = await fetch(url);
            const jsonResponse = await response.json();
            jsonResponse.forEach(commit => {
                this.commits.push({
                    sha: commit.sha,
                    message: commit.commit.message,
                    author: commit.commit.author,
                    avatar_url: commit?.author?.avatar_url
                });
            });
            
        } catch(e) {
            console.error(`createCommits: ${e}`);
        }
    }

    async getCommits(commitQueryDto: CommitQueryDto): Promise<Commit[]> {
        try {
            let { page, perPage, author, repoName } = commitQueryDto;
            author = author ? author : "LervinU";
            repoName = repoName ? repoName : "commit-tracker";
            await this.create(`https://api.github.com/repos/${author}/${repoName}/commits?page=${page}&per_page=${perPage}`);
            return this.commits;
        } catch(e) {
            console.error(`getCommits: ${e}`);
        }

    }
}
