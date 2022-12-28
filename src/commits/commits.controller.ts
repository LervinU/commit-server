import { Controller, Get, Query } from '@nestjs/common';
import { CommitsService } from './commits.service'
import { Commit } from './interfaces/Commit';
import { CommitQueryDto } from './dto/commit-query.dto'


@Controller('commits')
export class CommitsController {
    constructor(private CommitsService: CommitsService) {}
    
    @Get()
    getAllCommits(@Query() commitQueryDto: CommitQueryDto): Promise<Commit[]>{
        return this.CommitsService.getCommits(commitQueryDto);
    }
}
