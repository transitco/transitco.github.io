FROM danlynn/ember-cli:latest AS baseline
WORKDIR /usr/src/app/transitco
COPY ./package.json /usr/src/app/transitco

#FROM baseline AS tester
RUN npm install
COPY . /usr/src/app/transitco
#RUN ember build
#RUN ember lint:hbs
#RUN ember lint:js
#RUN ember test

#FROM baseline AS production
#RUN npm install package-lock.json -- production
#COPY . /usr/src/app/transitco
RUN ember build
EXPOSE 4200 7020 7357
CMD ["ember", "serve"]