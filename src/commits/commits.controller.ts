import { Controller, Get } from '@nestjs/common';
import { CommitsService } from './commits.service'
import { Commit } from './interfaces/Commit';


@Controller('commits')
export class CommitsController {
    constructor(private CommitsService: CommitsService) {}
    
    @Get()
    getAllCommits(): Promise<Commit[]>{
        return this.CommitsService.getCommits();
    }
}
