$(function() {

    var menu = {
        options: [
            { text: "Lorem", url: "#", is_active: true },
            { text: "Ipsum", url: "#", is_active: false },
            { text: "Dolore", url: "#", is_active: false }
        ]
    };

    var products = {
        items: [{
                title: "Item galaxy mega",
                image: "watch1",
                details: [{
                        text: 'Ipsum Ipsum'
                    },
                    {
                        text: 'Lorem'
                    },
                    {
                        text: 'Ipsum'
                    }
                ]
            },
            {
                title: "Item galaxy ultra",
                image: "watch2",
                details: [{
                        text: 'Lorem'
                    },
                    {
                        text: 'Ipsum'
                    }
                ]
            },
            {
                title: "Item galaxy future omega",
                image: "watch3",
                details: [{
                        text: 'Ipsum'
                    },
                    {
                        text: 'Lorem'
                    },
                    {
                        text: 'Ipsum'
                    },
                    {
                        text: 'Dolore'
                    }
                ]
            }
        ]
    };

    var tplMenu = "<ul>{{#options}}{{>option}}{{/options}}</ul>";
    var partialsMenu = { option: "<li><a href='{{blogURL}}' {{#is_active}} class='active' {{/is_active}}>{{text}}</a></li>" };

    var htmlMenu = Mustache.to_html(tplMenu, menu, partialsMenu);
    $('#menu-area').html(htmlMenu);

    var htmlProducts = "";

    $.get('templates/product.html', function(temp) {
        htmlProducts = Mustache.to_html(temp, products);
    }).done(function() {
        $('#products-area').html(htmlProducts);
    });

    $('#information-menu').find('img').click(function() {
        var element = $(this);
        var path = element.attr('src');
        var elementParent = element.parents('#information-container');
        elementParent.find('img').removeClass('active'); // remove active from all elements
        if (element.hasClass("active")) {
            element.removeClass('active');
        } else {
            element.addClass('active');
        }
        elementParent.css('background-image', 'url(' + path + ')');
    });

});