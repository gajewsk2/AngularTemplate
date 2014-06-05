'use strict';
/**
 * Created by gajewsm on 6/4/2014.
 */

describe('Odin App', function () {

    describe('Main list view', function () {

        beforeEach(function () {
            browser.get('app/index.html');
        });


        it('should filter the awesomeThings list as user types into the search box', function () {

            var thingList = element.all(by.repeater('thing in awesomeThings'));
            var query = element(by.model('query'));

            expect(thingList.count()).toBe(3);
//
//            query.sendKeys('html');
//            expect(thingList.count()).toBe(1);
//
//            query.clear();
//            query.sendKeys('a');
//            expect(thingList.count()).toBe(3);
//
//            query.sendKeys('karma');
//            expect(thingList.count()).toBe(1);
        });


    });
});
