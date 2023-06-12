# Example Sanity Studio Setup

## To use:

1. Ensure you have a Sanity project and dataset created.  That needs to be done on https://sanity.io before starting with this project.
2. After cloning, run `npm install` in the project directory to be sure all packages are installed.
3. Set up the two example environment variables. See: [Sanity Docs - Environment Variables](https://www.sanity.io/docs/environment-variables) 

    - `SANITY_STUDIO_EXAMPLE_PROJECT_ID` set to the project **ID** for the example here.
    - `SANITY_STUDIO_EXAMPLE_DATASET` set to the dataset that will be used for this example.  *IMPORTANT* - use an empty dataset, as this example will impose new scheama on the dataset and if existing document types or data exist in the dataset, you may lose or corrupt data already in the dataset OR this example and the corresponding site may not work as expected.
    - You *must* use the `SANITY_STUDIO_` prefix as Studio will ignore any environment variables that lack the prefix, to reduce the risk of exposing sensitive environment variables to the public.

## **Document Types**

### **Article**

#### Fieldsets:
- authors: to group together things like who wrote it, additional contributors, and other "who put words on the page" info
- seo: metadata, keywords, or other things that won't display on the page but are used by search engines, robots, or other tools
- editorial: who edited it, who hit publish, and other workflow stuff
- content: fields that display something on a web page where people can read it or see it.

#### Fields:

- image (image): _details to come_
- title (string): _details to come_
- subtitle (string): _details to come_
- slug (slug): _details to come_
- introQuote (text): _details to come_
- sections (array of articleSection): _details to come_
- keywordList (array of keyword):  _details to come_

#### Example GROQ:

_Example GROQ statements, illustrating common queries to get and use data from this document type will be included here in the future._

### **Keywords**

#### Fields:

- keyword (string):
- description (string):

#### Example GROQ:

_Example GROQ statements, illustrating common queries to get and use data from this document type will be included here in the future._

### **globalContent**

#### Fields:

- headline (string):
- intro (text): 

#### Example GROQ:

_Example GROQ statements, illustrating common queries to get and use data from this document type will be included here in the future._

### **siteSettings**

#### Fields:

- title (string):
- description (string): 

#### Example GROQ:

### **articleSection**

#### Fields:

- image (image):
- title (string):
- subtitle (string):
- meta (string):
- content (array of block):
- referenceUrlList (array of referenceUrl):

#### Example GROQ:

_Example GROQ statements, illustrating common queries to get and use data from this document type will be included here in the future._

### **referenceUrl**

#### Fields:

- referenceUrl (URL):
- description (string):
- free (boolean):

#### Example GROQ:

_Example GROQ statements, illustrating common queries to get and use data from this document type will be included here in the future._