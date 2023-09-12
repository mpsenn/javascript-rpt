# System Dependencies programming test

```js
npm ci
npm run test
```

# Problem description

Originally copied from [Karrels 1997 ACM Finals, Problem A](http://www.karrels.org/Ed/ACM/97/prob_a.html).

In this problem you'll implement a dependency management system. Software packages often have dependencies -- other packages that must be installed before they will function properly. These dependencies are frequently shared by multiple components. For example, the `react` package and the `angular` package require that the `nodejs` software be installed before they can operate. If you install `react` package, and later decide to add `angular`, you do not need to reinstall `nodejs`.

It is useful to be able to remove components that are no longer needed, to save disk space or memory space. But a supporting component, not explicitly installed, may be removed only if all components which depend on it are also removed. For example, removing the `angular` package and `nodejs` package would mean the `react` package, which was not removed, would no longer operate. Likewise, if we installed `react` to support our own development, then installed the `angular` client (which also depends on `nodejs`) and then still later removed the `angular` client, we would not want `nodejs` to be removed because it is still required.

You'll need to maintain a record of installed components and component dependencies. You'll also need to maintain a record of which packages depend on other packages.

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
