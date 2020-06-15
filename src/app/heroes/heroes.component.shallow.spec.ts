import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroesComponent } from "./heroes.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HeroService } from "../hero.service";
import { of } from "rxjs/observable/of";

describe('Heroes Component (shallow tests)', () => {
    let fixture: ComponentFixture<HeroesComponent>;
    let mockHeroService;
    let HEROES;
    
    beforeEach(() => {
        HEROES = [
            {id: 1, name: 'SpiderMan', strength: 8},
            {id: 2, name: 'SuperMan', strength: 24},
            {id: 3, name: 'BatMan', strength: 55},
        ];

        mockHeroService = jasmine.createSpyObj(['getHeroes','addHero','deleteHero']);

        TestBed.configureTestingModule({
            declarations : [  HeroesComponent ],
            providers : [
                { provide : HeroService, useValue: mockHeroService }
            ],
            schemas : [ NO_ERRORS_SCHEMA ]
        });

        fixture = TestBed.createComponent(HeroesComponent);
    });

     it('should set Heroes correctly from service', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        fixture.detectChanges();

        expect(fixture.componentInstance.heroes.length).toBe(3);
     })
})