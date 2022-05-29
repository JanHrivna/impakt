import { BadRequestException, PipeTransform } from "@nestjs/common";

export class AnalyzyValidationPipe implements PipeTransform {
    constructor(private uniqueAttr: string) { }

    transform(value: any[]) {
        const arr = value.map(v => v[this.uniqueAttr])
        const arrSize = arr.length
        const uniqueSize = new Set(arr).size

        if (arrSize !== uniqueSize) {
            throw new BadRequestException(`property ${this.uniqueAttr} has duplicit values`);
        }

        return value;
    }
}


