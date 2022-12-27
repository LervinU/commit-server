import { Injectable } from '@nestjs/common';
import { Commit } from './interfaces/Commit';

@Injectable()
export class CommitsService {
    private readonly commits: Commit[] = [];

    private async create(url: string) {
        try {
            const response = await fetch(url);
            const jsonResponse = await response.json();
            jsonResponse.forEach(commit => {
                this.commits.push({
                    sha: commit.sha,
                    message: commit.commit.message,
                    author: commit.commit.author,
                    avatar_url: commit.author.avatar_url
                });
            });
            
        } catch(e) {
            console.error(`createCommits: ${e}`);
        }
    }

    async getCommits(): Promise<Commit[]> {
        try {
            await this.create("https://api.github.com/repos/LervinU/commits-repo/commits");
            return this.commits;
        } catch(e) {
            console.error(`getCommits: ${e}`);
        }

    }
}
