#! /bin/bash

export LDAP_URL=ldap://localhost:10389
export LDAP_BASE=ou=users
export LDAP_DN=cn={username},ou=users
export LDAP_FILTER=(cn={username})
export LDAP_ATTRIBUTES=['cn']
export DB_TYPE=mysql
export DB_HOST=localhost
export DB_PORT=3306
export DB_USERNAME=root
export DB_PASSWORD=12345
export DB_NAME=impakt
export JWT_SECRET=asdfopwe5fdser56sfdg-sdfger5sdfg+ws

