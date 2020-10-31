#!/usr/bin/env node

/*
Author (Copyright) 2020 <Jean-Baptiste-Lasselle>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.

Also add information on how to contact you by electronic and paper mail.

If your software can interact with users remotely through a computer
network, you should also make sure that it provides a way for users to
get its source.  For example, if your program is a web application, its
interface could display a "Source" link that leads users to an archive
of the code.  There are many ways you could offer source, and different
solutions will be better for different programs; see section 13 for the
specific requirements.

You should also get your employer (if you work as a programmer) or school,
if any, to sign a "copyright disclaimer" for the program, if necessary.
For more information on this, and how to apply and follow the GNU AGPL, see
<https://www.gnu.org/licenses/>.
*/
import * as rxjs from 'rxjs';
import "./lib/env";
import "./lib/errors";
import { Cli } from './modules/cli/Cli';


/// Welcome
console.log('')
console.log('+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x')
console.log('            Gravitee Dev Team CLI ')
console.log('+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x')
console.log('')

/// throw new Error("DEBUG STOP POINT")

export const cli : Cli = new Cli();

console.log(`{[ index.ts ]} --- valeur yargs de l'option YARGS 'gio' : ${cli.gnuOptions.argv["gio"]}`);
console.log(`{[ index.ts ]} --- valeur yargs de l'option YARGS 'api-home' : ${cli.gnuOptions.argv["api-home"]}`);
console.log(`{[ index.ts ]} --- valeur yargs de l'option YARGS 'gw-home' : ${cli.gnuOptions.argv["gw-home"]}`);

process.argv = cli.gnuOptions.argv;

console.log(`{[ index.ts / process.argv ]} --- valeur yargs de l'option YARGS 'gio' : ${process.argv["gio"]}`);
console.log(`{[ index.ts / process.argv ]} --- valeur yargs de l'option YARGS 'api-home' : ${process.argv["api-home"]}`);
console.log(`{[ index.ts / process.argv ]} --- valeur yargs de l'option YARGS 'gw-home' : ${process.argv["gw-home"]}`);
