export const collectionDeveloper = {
    name: 'developer',
    title: 'Developer',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'mainImage',
            title: 'MainImage',
            type: 'image',
            imgurl: 'imgUrl',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            description: 'Price in USD',
            validation: Rule => Rule.min(1),
        },
        {
            name: 'size',
            title: 'Size',
            type: 'string',
            options: {
                list: [
                    {title: 'Small', value: 'small'},
                    {title: 'Medium', value: 'medium'},
                    {title: 'Large', value: 'large'},
                ],
            },
        },
        {
            name: 'color',
            title: 'Color',
            type: 'string',
            options: {
                list: [
                    {title: 'Red', value: 'red'},
                    {title: 'Green', value: 'green'},
                    {title: 'Blue', value: 'blue'},
                ],
            },
        },
    ],
}