import {Injectable} from "@angular/core";

@Injectable()
export class CourseService{
  findAllCourses = () => fetch('http://blackboardbackend-env.eba-ea9fqufi.us-east-2.elasticbeanstalk.com/api/courses').then(response => response.json())
}
