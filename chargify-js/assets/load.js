var chargify = new Chargify();

chargify.load({
    // selector, where the iframe will be included on your page
    // optional, if you have a `selector` for every field ('fields' option)
    //selector: '#chargify-form',

    // (i.e. '1a2cdsdn3lkn54lnlkn')
    publicKey: 'chjs_8xshdkfdntjfnd3yts3yq7h5',

    // form type (possible values: 'card', 'bank' or 'gocardless')
    type: 'card',

    // points to your Chargify site
    serverHost: 'https://sf-ri-rory.chargify.com',

    // flag to show/hide the credit card image
    // true: hides the credit card image
    // visible otherwise
    hideCardImage: false,

    // optional label/translation (i.e. '(optional field)') for optional fields
    // Especially useful if you use 'fields' option
    optionalLabel: '(optional field)',

    // required label/translation (i.e. '*') for required fields
    // Especially useful if you use 'fields' option
    requiredLabel: '',

    // optional global styles that include iframe styles,
    // styles for fields, inputs, labels and messages
    style: {
        // to style an iframe, use the iframe's container selector
        '#chargify-form': { border: '1px dashed #F2F4F8' },

        // `field` is the container for each field
        field: {
            backgroundColor: '#F2F4F8',
            paddingTop: '10px',
            paddingBottom: '10px',
            borderRadius: '5px',
        },

        // `input` is the input HTML element
        input: {
            backgroundColor: '#e6e6e6',
            paddingTop: '2px',
            paddingBottom: '1px',
            placeholder: { color: '#eee' }
        },

        // `label` is the label container
        label: {
            backgroundColor: '#F2F4F8',
            paddingTop: '2px',
            paddingBottom: '1px',
            fontFamily: 'Muli',
            fontWeight: '700'
        },

        // `message` is the invalid message container
        message: {
            backgroundColor: 'red',
            color: 'white',
            paddingTop: '2px',
            paddingBottom: '1px'
        }
    },

    // use this option if you want to include each field
    // in the separate iframe
    fields: {

        firstName: {
            // selector, where the iframe with this field will be included
            // on your page
            selector: '#chargify1',

            // ot overrides default label
            label: 'FIRST NAME',

            // it overrides default placeholder
            placeholder: 'John',

            // if a given field is optional by default, you can make it required
            required: true,

            // it overrides default error message
            message: 'First name is not valid. Please update it.',

            // it overrides or defines max length
            maxlength: '30',

            // it overrides global styles for this field only
            style: {
                field: {
                    backgroundColor: '#F2F4F8',
                    borderRadius: '5px'
                },
                input: {
                    backgroundColor: '#fdfde1',
                    paddingTop: '5px',
                    paddingBottom: '5px',
                    placeholder: { color: '#1A283D' },
                    backgroundColor: 'white'
                },
                label: {
                    fontSize: '11px',
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 'large',
                    color: '#2CA760',
                    backgroundColor: '#F2F4F8'
                },
                message: { paddingTop: '2px', paddingBottom: '1px' }
            }
        },

        lastName: {
            selector: '#chargify2',
            label: 'LAST NAME',
            placeholder: 'Doe',
            required: true,
            message: 'This field is not valid. Please update it.',
            maxlength: '30',
            style: {
                field: {
                    backgroundColor: '#F2F4F8',
                    borderRadius: '5px'
                },
                input: {
                    backgroundColor: '#fdfde1',
                    paddingTop: '2px',
                    paddingBottom: '1px',
                    placeholder: { color: '#1A283D' },
                    backgroundColor: 'white'
                },
                label: {
                    fontSize: '11px',
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 'large',
                    color: '#2CA760'
                },
                message: { paddingTop: '2px', paddingBottom: '1px' }
            }
        },

        number: {
            selector: '#chargify3',
            label: 'Number',
            placeholder: 'xxxx xxxx xxxx xxxx',
            required: true,
            message: 'This field is not valid. Please update it.',
            style: {
                field: {
                    backgroundColor: '#F2F4F8',
                    padding: '3px',
                    borderRadius: '5px'
                },
                input: {
                    backgroundColor: '#fdfde1',
                    paddingTop: '2px',
                    paddingBottom: '1px',
                    placeholder: { color: '#1A283D' },
                    backgroundColor: 'white'
                },
                label: {
                    paddingTop: '2px',
                    paddingBottom: '1px',
                    fontSize: '11px',
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 'large',
                    color: '#2CA760'
                },
                message: { paddingTop: '2px', paddingBottom: '1px' }
            }
        },

        month: {
            selector: '#chargify4',
            label: 'Mon',
            placeholder: 'mm',
            required: true,
            message: 'This field is not valid. Please update it.',
            style: {
                field: {
                    backgroundColor: '#F2F4F8',
                    padding: '3px',
                    borderRadius: '5px'
                },
                input: {
                    backgroundColor: '#fdfde1',
                    paddingTop: '2px',
                    paddingBottom: '1px',
                    placeholder: { color: '#1A283D' },
                    backgroundColor: 'white'
                },
                label: {
                    paddingTop: '2px',
                    paddingBottom: '1px',
                    fontSize: '11px',
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 'large',
                    color: '#2CA760'
                },
                message: { paddingTop: '2px', paddingBottom: '1px' }
            }
        },

        year: {
            selector: '#chargify5',
            label: 'Year',
            placeholder: 'yyyy',
            required: true,
            message: 'This field is not valid. Please update it.',
            style: {
                field: {
                    backgroundColor: '#F2F4F8',
                    padding: '3px',
                    borderRadius: '5px'
                },
                input: {
                    backgroundColor: '#fdfde1',
                    paddingTop: '2px',
                    paddingBottom: '1px',
                    placeholder: { color: '#1A283D' },
                    backgroundColor: 'white'
                },
                label: {
                    paddingTop: '2px',
                    paddingBottom: '1px',
                    fontSize: '11px',
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 'large',
                    color: '#2CA760'
                },
                message: { paddingTop: '2px', paddingBottom: '1px' }
            }
        },

        cvv: {
            selector: '#chargify6',
            label: 'CVV code',
            placeholder: '123',
            required: true,
            message: 'This field is not valid. Please update it.',
            style: {
                field: {
                    backgroundColor: '#F2F4F8',
                    padding: '3px',
                    borderRadius: '5px'
                },
                input: {
                    backgroundColor: '#fdfde1',
                    paddingTop: '2px',
                    paddingBottom: '1px',
                    placeholder: { color: '#1A283D' },
                    backgroundColor: 'white'
                },
                label: {
                    paddingTop: '2px',
                    paddingBottom: '1px',
                    fontSize: '11px',
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 'large',
                    color: '#2CA760'
                },
                message: { paddingTop: '2px', paddingBottom: '1px' }
            }
        },
        address: {
            selector: '#chargify7',
            label: 'Address',
            placeholder: '1234 Hill St',
            required: true,
            message: 'This field is not valid. Please update it.',
            maxlength: '70',
            style: {
                field: {
                    backgroundColor: '#F2F4F8',
                    padding: '3px',
                    borderRadius: '5px'
                },
                input: {
                    backgroundColor: '#fdfde1',
                    paddingTop: '2px',
                    paddingBottom: '1px',
                    placeholder: { color: '#1A283D' },
                    backgroundColor: 'white'
                },
                label: {
                    paddingTop: '2px',
                    paddingBottom: '1px',
                    fontSize: '11px',
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 'large',
                    color: '#2CA760'
                },
                message: { paddingTop: '2px', paddingBottom: '1px' }
            }
        },
        address2: {
            selector: '#chargify8',
            label: 'Address 2',
            placeholder: '1234 Hill St',
            required: false,
            message: 'This field is not valid. Please update it.',
            maxlength: '70',
            style: {
                field: {
                    backgroundColor: '#F2F4F8',
                    padding: '3px',
                    borderRadius: '5px'
                },
                input: {
                    backgroundColor: '#fdfde1',
                    paddingTop: '2px',
                    paddingBottom: '1px',
                    placeholder: { color: '#1A283D' },
                    backgroundColor: 'white'
                },
                label: {
                    paddingTop: '2px',
                    paddingBottom: '1px',
                    fontSize: '11px',
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 'large',
                    color: '#2CA760'
                },
                message: { paddingTop: '2px', paddingBottom: '1px' }
            }
        },
        city: {
            selector: '#chargify9',
            label: 'City',
            placeholder: 'Austin',
            required: true,
            message: 'This field is not valid. Please update it.',
            maxlength: '30',
            style: {
                field: {
                    backgroundColor: '#F2F4F8',
                    padding: '3px',
                    borderRadius: '5px'
                },
                input: {
                    backgroundColor: '#fdfde1',
                    paddingTop: '2px',
                    paddingBottom: '1px',
                    placeholder: { color: '#1A283D' },
                    backgroundColor: 'white'
                },
                label: {
                    paddingTop: '2px',
                    paddingBottom: '1px',
                    fontSize: '11px',
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 'large',
                    color: '#2CA760'
                },
                message: { paddingTop: '2px', paddingBottom: '1px' }
            }
        },

        state: {
            selector: '#chargify10',
            label: 'State',
            placeholder: 'TX',
            required: true,
            message: 'This field is not valid. Please update it.',
            maxlength: '2',
            style: {
                field: {
                    backgroundColor: '#F2F4F8',
                    padding: '3px',
                    borderRadius: '5px'
                },
                input: {
                    backgroundColor: '#fdfde1',
                    paddingTop: '2px',
                    paddingBottom: '1px',
                    placeholder: { color: '#1A283D' },
                    backgroundColor: 'white'
                },
                label: {
                    paddingTop: '2px',
                    paddingBottom: '1px',
                    fontSize: '11px',
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 'large',
                    color: '#2CA760'
                },
                message: { paddingTop: '2px', paddingBottom: '1px' }
            }
        },

        zip: {
            selector: '#chargify11',
            label: 'Zip Code',
            placeholder: '10001',
            required: true,
            message: 'This field is not valid. Please update it.',
            maxlength: '5',
            style: {
                field: {
                    backgroundColor: '#F2F4F8',
                    padding: '3px',
                    borderRadius: '5px'
                },
                input: {
                    backgroundColor: '#fdfde1',
                    paddingTop: '2px',
                    paddingBottom: '1px',
                    placeholder: { color: '#1A283D' },
                    backgroundColor: 'white'
                },
                label: {
                    paddingTop: '2px',
                    paddingBottom: '1px',
                    fontSize: '11px',
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 'large',
                    color: '#2CA760'
                },
                message: { paddingTop: '2px', paddingBottom: '1px' }
            }
        },

        country: {
            selector: '#chargify12',
            label: 'Country',
            placeholder: 'US',
            required: true,
            message: 'This field is not valid. Please update it.',
            maxlength: '30',
            style: {
                field: {
                    backgroundColor: '#F2F4F8',
                    padding: '3px',
                    borderRadius: '5px'
                },
                input: {
                    backgroundColor: '#fdfde1',
                    paddingTop: '2px',
                    paddingBottom: '1px',
                    placeholder: { color: '#1A283D' },
                    backgroundColor: 'white'
                },
                label: {
                    paddingTop: '2px',
                    paddingBottom: '1px',
                    fontSize: '11px',
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 'large',
                    color: '#2CA760'
                },
                message: { paddingTop: '2px', paddingBottom: '1px' }
            }
        }
    }
});