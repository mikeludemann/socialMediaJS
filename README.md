# socialMediaJS

A simple Modal Plugin for many social media platforms

## Prerequisite

* JQuery 3.x (Smaller JQuery 3.x with JQuery Migrate)
* Font Awesome (From Repository or add yourself)

## Example

```code
Default

$("#test").socialMedia();

Modify options - Simple

$("#test").simpleModal({
    title: "Social",
    footer: "(c) Copyright",
    radiusBorder: false,
    fontSize: "20px"
});

Modify options - Advanced

$("#test").simpleModal({
    title: "Social Media and Network",
    content: "",
    footer: "(c) Copyright",
    radiusBorder: true,
    fontSize: "14px",

    facebook: "test.tester",
    facebookMessenger: "test.tester",
    twitter: "test.tester",
    pinterest: "test.tester",
    instagram: "test.tester",
    googlePlus: "test.tester",
    foursquare: "test.tester",
    whatsapp: "01800123456789",
    xing: "test.tester",
    linkedin: "test.tester",
    youtube: "test.tester",
    vimeo: "test.tester",
    mail: "test.tester@test.org"
});
```