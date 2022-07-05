import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { toNamespacedPath } from 'path';
import { CoursesService } from './courses.service';
import { Course } from './entities/course.entity';

const courses = ['Javascript', 'Typescript', 'Nodejs']

interface CreateCourse {
  name: string;
  message: string;
}

@Controller('courses')
export class CoursesController {
  constructor (private readonly coursesService: CoursesService) {}
  
  randomId() {
    return Math.floor(Math.random() * (0 - 9999) + 9999)
  }

  @Get()
  findAll(): Course[] {
    return this.coursesService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(id)
  }

  @Post()
  create(@Body() body): CreateCourse {
    body.id = this.randomId()
    return this.coursesService.create(body)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.coursesService.update(id, body)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.coursesService.delete(id)
  }
}
