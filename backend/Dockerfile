## ruby version does matter 
FROM ruby:2.7.4

WORKDIR /backend
COPY . /backend
RUN bundle install 

EXPOSE 9292

CMD ["bundle", "exec", "rackup", "--host", "0.0.0.0", "-p", "9292"]


