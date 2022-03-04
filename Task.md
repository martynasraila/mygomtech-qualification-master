# Interview task "User management"

## Tasks

 Our customer support team is receiving a storm of complaints. You're the only guy who can solve this problem. Here's what you have to do to fix the situation:

Done: * You may notice that logout button is not working
Done: * Create additional tab (old) that should show emails older than 30d
Done: * Validate login username, password
Done: * Add loader to login page
Done: * After Email update page should not be reloaded
Done: * Add wrong emails filter
Remains: * Add tests (wasn't able to start running, couldn't figure out the cannot find module error yet)
Somewhat: * Refactor to make the code neat and clean - this will keep your teammates happy
Somewhat: * Fix as many errors as you notice

Additional errors found:
Done: *Credentials in url
Done: *Using get method instead of post for login in endpoints/authentication

TESTS: 

    *Testing simple to complex, independent components first:
        *Login
        *Filter.tsx
        *FilterTab.tsx
        *Header.tsx - handle logout, check if username renders correctly


    *Test logout button: after click check if logout button is rendered no more / expect local storage remove to be called
        1st A
        jest.spyOn(Object.getPrototypeOf(localStorage), "getItem");
        jest.spyOn(Object.getPrototypeOf(localStorage), "setItem");

        1st B
        jest.spyOn(window.localStorage.__proto__, 'removeItem');
        window.localStorage.__proto__.removeItem = jest.fn();

        2nd
        // assertions as usual:
        expect(localStorage.removeItem).toHaveBeenCalled();

    *Test filtering of different lists:
    *Update email validation test
    *No refresh after updating email
