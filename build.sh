#!/bin/bash
set -e
# Searches for all pom.xml files and builds them
MAVEN_CMD="mvn clean"
if [ "$1" == "deploy" ]; then
    MAVEN_CMD="$MAVEN_CMD $1"
else
    MAVEN_CMD="$MAVEN_CMD install"
fi
echo "Using maven command '$MAVEN_CMD'"
CURRENT=`pwd`
for i in `find . -name 'pom.xml'`; do
    CLIENT="${i%/*}"
    echo "Building theme for client $CLIENT"

    cd $CURRENT
    cd $CLIENT && $MAVEN_CMD
done
