import { HeroesComponent } from "./heroes.component";
import { of } from "rxjs/observable/of";

describe('Heroes Component', () => {
    let component: HeroesComponent;
    let HEROES;
    let mockHeroService;

    beforeEach(() => {
        HEROES = [
            {id: 1, name: 'SpiderMan', strength: 8},
            {id: 2, name: 'SuperMan', strength: 24},
            {id: 3, name: 'BatMan', strength: 55},
        ];

        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

        component = new HeroesComponent(mockHeroService);
    })

    describe('delete', () => {
        it('should remove hero from heroes list', () => {
            mockHeroService.deleteHero.and.returnValue(of(null));
            component.heroes = HEROES;

            component.delete(HEROES[2]);

            expect(component.heroes.length).toBe(2);
        })

        it('should call deleteHero', () => {
            mockHeroService.deleteHero.and.returnValue(of(null));
            component.heroes = HEROES;
            
            component.delete(HEROES[2]);

            expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
        })

        it('should call getHeroes', () => {
            mockHeroService.getHeroes.and.returnValue(of(HEROES));
            component.getHeroes();

            expect(component.heroes.length).toBe(3);
        })

        it('should call AddHero', () => {
            mockHeroService.addHero.and.returnValue(of(null));
            component.heroes = HEROES;
            component.add('GHI');
            expect(component.heroes.length).toBe(4);
        })
    })
})