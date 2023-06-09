# Example Sanity Studio Setup

## To use:

1. Ensure you have a Sanity project and dataset created.  That needs to be done on https://sanity.io before starting with this project.
2. After cloning, run `npm install` in the project directory to be sure all packages are installed.
3. Set up the two example environment variables. See: [Sanity Docs - Environment Variables](https://www.sanity.io/docs/environment-variables) 

    - `SANITY_STUDIO_EXAMPLE_PROJECT_ID` set to the project **ID** for the example here.
    - `SANITY_STUDIO_EXAMPLE_DATASET` set to the dataset that will be used for this example.  *IMPORTANT* - use an empty dataset, as this example will impose new scheama on the dataset and if existing document types or data exist in the dataset, you may lose or corrupt data already in the dataset OR this example and the corresponding site may not work as expected.
    - You *must* use the `SANITY_STUDIO_` prefix as Studio will ignore any environment variables that lack the prefix, to reduce the risk of exposing sensitive environment variables to the public.