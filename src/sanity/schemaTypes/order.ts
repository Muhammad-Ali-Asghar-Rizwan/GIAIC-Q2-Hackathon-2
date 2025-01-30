export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
        {
        name: 'firstName',
        title: 'First Name',
        type: 'string',
        },
        {
        name: 'lastName',
        title: 'Last Name',
        type: 'string',
        },
        {
        name: 'address',
        title: 'Address',
        type: 'string',
        },
        {
        name: 'city',
        title: 'City',
        type: 'string',
        },
        {
        name: 'zipCode',
        title: 'Zip Code',
        type: 'string',
        },
        {
        name: 'phone',
        title: 'Phone',
        type: 'string',
        },
        {
        name: 'email',
        title: 'Email',
        type: 'string',
        },
        {
        name: 'cartItems',
        title: 'Cart Items',
        type: 'array',
        of: [{ type: 'reference', to: { type: 'product'}}],
        },
        {
        name: 'total',
        title: 'Total',
        type: 'number',
        },
        {
            name: "status",
            title: "order Status",
            type: "string",
            options: {
                list : [
                { value: "Pending", title: "pending" },
                { value: "Success", title: "succes" },
                { value: "Dispatch", title: "dispatch" },
            ],
            layout: "radio",    // dropdown or radio
            },
            initialvalue: "Pending", // default value
        }
    ],
}