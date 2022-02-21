# Add translation

1.  Add react-intl, in dev: typescript-react-intl
    gettext-extractor

           yarn add react-intl
           yarn add typescript-react-intl -D
           yarn add gettext-extractor

2.  Create a dictionary file where you will put all words and phrases

3.  Create a bin file to execute to create pot file

        yarn extract:pot

4.  Open pot file with poEdit and create a new translation (fr)
5.  Ssave the po file created in locales
6.  Execute the script to create a json file

        yarn extract:toJson

7.  Use the create file in the intlContext in \_app.ts file to import all the translations.

## Liens explicatifs

[Explain i18n with react intl : Ytbe Link](https://www.youtube.com/watch?v=hpUWx6F5QOM&t=1272s)

[Github page of youtube Link](https://github.com/lehresman/shopping-list-i18n)
