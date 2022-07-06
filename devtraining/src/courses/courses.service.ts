import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Fundamentos do framework NestJS',
      description: 'Fundamentos do framework NestJS',
      tags: ['Node.js', 'NestJS', 'Javascript'],
    }
  ]

  findAll(): Course[] {
    return this.courses
  }

  findOne(id: string): Course {
    const course = this.courses.find(course => course.id === Number(id))

    if (!course) {
      throw new HttpException(`Curso com id: ${id}, não encontrado.`, HttpStatus.NOT_FOUND)
    }
    
    return course
  }

  create(createCourseDto: any): any {
    this.courses.push(createCourseDto)
  }

  update(id: string, updateCourseDto: any) {
    const courseIndex = this.courses.findIndex(course => course.id === Number(id))
    this.courses[courseIndex] = updateCourseDto
  } 

  delete(id: string) {
    const courseIndex = this.courses.findIndex(course => course.id === Number(id))

    if (courseIndex >= 0) {
      this.courses.splice(courseIndex, 1)
    }
  }
}
