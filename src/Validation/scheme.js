import * as Yup from "yup";

const scheme = Yup.object().shape({
    name: Yup
        .string()
        .required("Must include your name.")
        .test('len', 'Must be more than 2 characters', val => val.length > 1),
    size: Yup
        .string()
        .required("Must select a size")
        .oneOf(['Large', 'Medium', 'Small'], "Please select a role"),
    specialInstructions: Yup
        .string(),
})

export default scheme;