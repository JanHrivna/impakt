import { Injectable } from "@angular/core";
import { NgbDatepickerI18n, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

const I18N_VALUES: any = {
    'cs': {
        weekdays: ['Po', 'Út', 'St', 'Čt', 'Pá', 'So', 'Ne'],
        months: ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'],
        weekLabel: 'týden'
    }
};

@Injectable()
export class I18n {
    language = 'cs';
}

// Define custom service providing the months and weekdays translations
@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {
    constructor(private _i18n: I18n) { super(); }

    getWeekdayLabel(weekday: number): string { return I18N_VALUES[this._i18n.language].weekdays[weekday - 1]; }
    override getWeekLabel(): string { return I18N_VALUES[this._i18n.language].weekLabel; }
    getMonthShortName(month: number): string { return I18N_VALUES[this._i18n.language].months[month - 1]; }
    getMonthFullName(month: number): string { return this.getMonthShortName(month); }
    getDayAriaLabel(date: NgbDateStruct): string { return `${date.day}-${date.month}-${date.year}`; }

}