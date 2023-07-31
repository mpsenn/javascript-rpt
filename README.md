# System Dependencies programming test

```js
npm ci
npm run test
```

# Problem description

Originally copied from [Karrels 1997 ACM Finals, Problem A](http://www.karrels.org/Ed/ACM/97/prob_a.html).

Components of computer systems often have dependencies--other components that must be installed before they will function properly. These dependencies are frequently shared by multiple components. For example, both the TELNET client program and the FTP client program require that the TCP/IP networking software be installed before they can operate. If you install TCP/IP and the TELNET client program, and later decide to add the FTP client program, you do not need to reinstall TCP/IP.

For some components it would not be a problem if the components on which they depended were reinstalled; it would just waste some resources. But for others, like TCP/IP, some component configuration may be destroyed if the component was reinstalled.

It is useful to be able to remove components that are no longer needed. When this is done, components that only support the removed component may also be removed, freeing up disk space, memory, and other resources. But a supporting component, not explicitly installed, may be removed only if all components which depend on it are also removed. For example, removing the FTP client program and TCP/IP would mean the TELNET client program, which was not removed, would no longer operate. Likewise, removing TCP/IP by itself would cause the failure of both the TELNET and the FTP client programs. Also if we installed TCP/IP to support our own development, then installed the TELNET client (which depends on TCP/IP) and then still later removed the TELNET client, we would not want TCP/IP to be removed.

We want a program to automate the process of adding and removing components. To do this we will maintain a record of installed components and component dependencies. A component can be installed explicitly in response to a command (unless it is already installed), or implicitly if it is needed for some other component being installed. Likewise, a component, not explicitly installed, can be explicitly removed in response to a command (if it is not needed to support other components) or implicitly removed if it is no longer needed to support another component.

## Input

The input will contain a sequence of commands (as described below), each on a separate line containing no more than eighty characters. Item names are case sensitive, and each is no longer than ten characters. The command names (DEPEND, INSTALL, REMOVE and LIST) always appear in uppercase starting in column one, and item names are separated from the command name and each other by one or more spaces. All appropriate DEPEND commands will appear before the occurrence of any INSTALL dependencies. The end of the input is marked by a line containing only the word END.

| Command Syntax | Interpretation/Response |
| --- | --- |
| DEPEND item1 item2 [item3 ...] | item1 depends on item2 (and item3 ...) |
| INSTALL item1	| install item1 and those on which it depends |
| REMOVE item1 | remove item1, and those on whch it depends, if possible |
| LIST | list the names of all currently-installed components |

## Output

Echo each line of input. Follow each echoed INSTALL or REMOVE line with the actions taken in response, making certain that the actions are given in the proper order. Also identify exceptional conditions (see Expected Output, below, for examples of all cases). For the LIST command, display the names of the currently installed components. No output, except the echo, is produced for a DEPEND command or the line containing END. There will be at most one dependency list per item.
