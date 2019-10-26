FROM ruby:2.5

# ARG UID
# RUN adduser rails --uid $UID --disabled-password --gecos ""

ENV APP /usr/src/app
RUN mkdir $APP
WORKDIR $APP
# COPY Gemfile Gemfile.lock ./
COPY Gemfile  ./

# COPY Gemfile* $APP/
# RUN bundle install -j3 --path vendor/bundle
# RUN bundle install -j3 

# COPY . $APP/

RUN   echo "alias ll='ls -la'" >>   ~/.bashrc ; chmod ugo+rw  ~/.bashrc \
  && echo "alias psg='ps -ef|grep '" >>   ~/.bashrc  \
  && find $APP -type f -name "server.pid" -exec rm -f {} \; \
  && rm -f $APP/tmp/pids/server.pid

CMD ["bundle", "exec","rails", "server", "-p", "8080", "-b", "0.0.0.0"]

