import {initService, SearchService} from "../usecase/search-service";

describe('Test Matching function', () => {
    it('should return true if matching happened', async () => {
        const service: SearchService = initService();
        const matching: boolean = service.matchUser(['1','Verdi' , 'Alberto' , '03/08/1987'], 1, 'Verdi');
        expect(matching).toBe(true)
    })

    it('should return false if matching not happened', async () => {
        const service: SearchService = initService();
        const matching: boolean = service.matchUser(['1','Verdi' , 'Alberto' , '03/08/1987'], 1, 'Verd');
        expect(matching).toBe(false)
    })
});
