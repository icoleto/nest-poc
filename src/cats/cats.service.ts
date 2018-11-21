import { Injectable } from '@nestjs/common';
import { CatDto } from './cat';

@Injectable()
export class CatsService {

    isValid(cat: CatDto) {
        const isValid = (cat.age != null && cat.name != null && cat.breed != null);
        if (cat.age == null) {
            throw new Error('age field cannot be null');
        }
        if (cat.breed == null) {
            throw new Error('breed field cannot be null');
        }
        if (cat.name == null) {
            throw new Error('name field cannot be null');
        }
    }
}
