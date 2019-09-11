  
import moxios from 'moxios';
import { testStore } from '../utils';
import { getCurrency, updateBaseCurrency,editBaseCurrency, deleteCurrency, addCurrency,cancelAddCurrency } from '../actions';

describe('getCurrency action', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('Store is updated correctly', () => {

        const expectedState = {
            "rates": {
                "CAD": 1.3155986586,
            },
            "base": "USD",
            "date": "2019-09-09"
        };

        const expectedNewState = { data: { CAD: 1.3155986586 },
        isLoading: false,
        onAdding: false };

        const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        });

        return store.dispatch(getCurrency("USD","CAD"))
        .then(() => {
            const newState = store.getState();
            expect(newState.currency).toStrictEqual(expectedNewState);
        })
        
    });

});


describe('addCurrency action', () => {
    it('Should update onAdding to True is updated correctly', () => {
        const expectedNewState = {
            data: {},
            isLoading: false,
            onAdding: true
        };

        const store = testStore();
        store.dispatch(addCurrency());
        const newState = store.getState();
        expect(newState.currency).toStrictEqual(expectedNewState);
        
    });
});

describe('cancelAddCurrency action', () => {
    it('Should update onAdding to false is updated correctly', () => {
        const initialState = {
            currency: {
                data: {},
                isLoading: false,
                onAdding: true
            }
        };

        const expectedNewState = {
            data: {},
            isLoading: false,
            onAdding: false
        };

        const store = testStore(initialState);
        store.dispatch(cancelAddCurrency());
        const newState = store.getState();
        expect(newState.currency).toStrictEqual(expectedNewState);

    });
});


describe('editBaseCurrency action', () => {
    it('Should update onEdit to true is updated correctly', () => {
        const expectedNewState = {
            amount: "10.00",
            base: "USD",
            onEdit: true,
        };
        const store = testStore();
        store.dispatch(editBaseCurrency());
        const newState = store.getState();
        expect(newState.base_currency).toStrictEqual(expectedNewState);

    });
});


describe('updateBaseCurrency action', () => {
    it('Should update amount and onEdit to false is updated correctly', () => {
        const expectedNewState = {
            amount: "900",
            base: "USD",
            onEdit: false,
        };
        const store = testStore();
        store.dispatch(updateBaseCurrency("900"));
        const newState = store.getState();
        expect(newState.base_currency).toStrictEqual(expectedNewState);

    });
});


describe('deleteCurrency action', () => {
    it('Should update amount and onEdit to false is updated correctly', () => {

        const initialState={
            currency: { data: { CAD: 1.3155986586 },
            isLoading: false,
            onAdding: false }
        }
        const expectedNewState = {
            data: {},
            isLoading: false,
            onAdding: false
        };
        const store = testStore(initialState);
        store.dispatch(deleteCurrency("CAD"));
        const newState = store.getState();
        expect(newState.currency).toStrictEqual(expectedNewState);

    });
});


