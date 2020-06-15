import { TestBed, ComponentFixture } from "@angular/core/testing";
import { HeroComponent } from "./hero.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('Hero Component (shallow tests)', () => {

    let fixture: ComponentFixture<HeroComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                HeroComponent
            ],
            schemas :[
                NO_ERRORS_SCHEMA
            ]
        });
        fixture = TestBed.createComponent(HeroComponent);
    });

    it('should have correct Hero', () => {
        fixture.componentInstance.hero = { id: 1, name: 'ABC', strength : 100 };
        
        expect(fixture.componentInstance.hero.name).toEqual('ABC');
    })

    it('should have render Hero name in an anchor tag', () => {
        fixture.componentInstance.hero = { id: 1, name: 'ABC', strength : 100 };
        fixture.detectChanges();
        
        let el = fixture.debugElement.query(By.css('a'));
        expect(el.nativeElement.textContent).toContain('ABC');

        // expect(fixture.nativeElement.querySelector('a').textContent).toContain('ABC');
        
    })
})