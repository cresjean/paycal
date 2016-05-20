FROM node:5.11
MAINTAINER CRESPO WANG <hotpuma@gmail.com>

# Prepare App folder
RUN mkdir -p /opt/myob
ADD public /opt/myob/public
ADD package.json /opt/myob
ADD bower.json /opt/myob
ADD .bowerrc /opt/myob
ADD gulpfile.js /opt/myob

# Install NPM and bower packages
RUN cd /opt/myob \
    && npm install \
    && npm install -g nodemon gulp \
    && gulp browserify

ENV TERM xterm

# Define start script
CMD ["/opt/myob/start.sh"]
