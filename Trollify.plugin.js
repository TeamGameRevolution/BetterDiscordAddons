//META{"name": "Trollify", "website": "https://temmie.wtf", "source": "https://github.com/TeamGameRevolution/BetterDiscordAddons/blob/master/Trollify.plugin.js"}*//

// Cast array of letters to proper grammar.
Array.prototype.toProperCase = function() {
    var ar = this;

    for (var i = 0; i < ar.length; i++) {
        if (ar[i] == "." && ar[i + 1] == " " && typeof ar[i + 2] != 'undefined') {
            ar[i + 2] = ar[i + 2].toUpperCase();
            i += 2;
        }
    }
    return ar;
}

function arrayToString(text) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
        result += text[i];
    }

    return result;
}

// Replace and match case.
// If the replacements are different sizes then lowercase it.
String.prototype.replaceMatchCase = function(subStr, newStr) {
    var str = this.split(" ");
    for (var i = 0; i < str.length; i++) {
        // Found a match, start comparing char values.
        if (str[i].toLowerCase() == subStr.toLowerCase()) {
            for (var h = 0; h < str[i].length; h++) {
                if (str[i].charAt(h) == str[i].charAt(h).toUpperCase()) {
                    str[i] = str[i].replaceAt(h, newStr.charAt(h).toUpperCase());
                } else {
                    str[i] = str[i].replaceAt(h, newStr.charAt(h).toLowerCase());
                }

                // Last char, make sure the entire new string was added.
                if (h == (str[i].length - 1) && str[i].length != newStr.length) {
                    if (str[i] == str[i].toUpperCase()) { // ALL CAPS
                        str[i] += newStr.substring(h, newStr.length - 1).toUpperCase();
                    } else { // lowercase
                        str[i] += newStr.substring(h, newStr.length - 1).toLowerCase();
                    }
                }
                // Last char for the new string, stop here then.
                else if (h == (newStr.length - 1)) {
                    str[i] = str[i].substr(0, newStr.length);
                }
            }
        }
        str[i] += " ";
    }
    return arrayToString(str);
}

// Replace char at desired index.
String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

// AAAAAAAAAAAAAAAAAAAAAAAAA
String.prototype.toFishPuns = function() {
    var str = this;

    str = str.replaceMatchCase("kill", "krill");
    str = str.replaceMatchCase("well", "whale");
    str = str.replaceMatchCase("fine", "fin");
    str = str.replaceMatchCase("see", "sea");
    str = str.replaceMatchCase("should", "shoald");
    str = str.replaceMatchCase("kidding", "squidding");
    str = str.replaceMatchCase("sure", "shore")
    str = str.replaceMatchCase("surely", "shorely")
    str = str.replaceMatchCase("crap", "carp")
        
    return str;
}

class Trollify {

    // QUIRK-IFY

    //========================================================================
    // Quirks logic by CommanderMark, adapted/modified by TeamGameRevolution
    // Original: http://geocities.ws/commandermark/troll.html
    //========================================================================

    string_ify(text) {
        var result = "";
        for (var i = 0; i < text.length; i++) {
            result += text[i];
        }
    
        return result;
    }

    aradia_ify(text) {
        if(text == "") return "";
        if(!this.settings.Trollify.aradia.dead) { return text.toLowerCase(); }
        var quirk = text.toLowerCase().split("");
        for(var i = 0; i < quirk.length; i++) {
            if(quirk[i] == "o") {
                quirk[i] = "0";
            }

            if(this.settings.Trollify.aradia.dead && typeof quirk[i + 1] == 'undefined' && Math.floor(Math.random() * 100) == 41) {
                quirk[i] = quirk[i] + " ribbit";
            }
        }
        return this.string_ify(quirk);
    }

    tavros_ify(text) {
        if (text == "") { return ""; }
    
        var quirk = text.toUpperCase().split("");
        quirk[0] = quirk[0].toLowerCase();
    
        for (var i = 0; i < quirk.length; i++) {
    
            if (quirk[i] == ".") {
                quirk[i] = ",";
            }
    
            if (quirk[i] == "," && quirk[i + 1] == " " && typeof quirk[i + 2] != 'undefined') {
                quirk[i + 2] = quirk[i + 2].toLowerCase();
            }
        }
    
        var quirkStr = this.string_ify(quirk);
        quirkStr = quirkStr.replace(":)", "}:)");
        quirkStr = quirkStr.replace(":(", "}:(");
    
        return quirkStr;
    }

    sollux_ify(text) {
        if (text == "") { return ""; }
    
        if (!this.settings.Trollify.sollux.dead) {
            var quirk = text.toLowerCase().split("");
    
            for (var i = 0; i < quirk.length; i++) {
    
                // Make sure there's no 'i's in front or back.
                if (quirk[i] == "i" && quirk[i - 1] != "i" && quirk[i + 1] != "i") {
                    quirk[i] = "ii"
                }
    
                if (quirk[i] == "s") {
                    quirk[i] = "2";
                }
            }
    
            var quirkStr = this.string_ify(quirk);
            quirkStr = quirkStr.replace(/\btoo\b/g, "two");
            quirkStr = quirkStr.replace(/\bto\b/g, "two");
    
            return quirkStr;
        } else {
            var quirk = text.toLowerCase().split("");
            for(var i = 0; i < quirk.length; i++) {
                if(quirk[i] == "o") {
                    quirk[i] = "0";
                }

                if(this.settings.Trollify.sollux.dead && typeof quirk[i + 1] == 'undefined' && Math.floor(Math.random() * 100) == 41) {
                    quirk[i] = quirk[i] + " ribbit";
                }
            }
            return this.string_ify(quirk);
        }
    }

    karkat_ify(text) {
        return text.toUpperCase();
    }

    nepeta_ify(text) {
        if (text == "") { return ""; }
    
        var quirkStr = text.toLowerCase();
    
        quirkStr.replace("ee", "33");
    
        // WOW CRINGE
        if (this.settings.Trollify.nepeta.catpuns) {
            quirkStr = quirkStr.replace(/\bmotherfucker\b/g, "meowtherfucker");
            quirkStr = quirkStr.replace(/for/g, "fur");
            quirkStr = quirkStr.replace("pause", "paws");
            quirkStr = quirkStr.replace("cause", "claws");
            quirkStr = quirkStr.replace("now", "meow");
            quirkStr = quirkStr.replace(/\bperfect\b/g, "purfect");
            quirkStr = quirkStr.replace("per", "pur");
            quirkStr = quirkStr.replace("pre", "pur");
        }
    
        return ":33 < " + quirkStr;
    }

    kanaya_ify(text) {
        if (text == "") { return ""; }
    
        var quirk = text.toLowerCase().split("");
        quirk[0] = quirk[0].toUpperCase();
    
        for (var i = 0; i < quirk.length; i++) {
            if (quirk[i] == " " && typeof quirk[i + 1] != 'undefined') {
                quirk[i + 1] = quirk[i + 1].toUpperCase();
            }
        }
    
        return this.string_ify(quirk);
    }

    terezi_ify(text) {
        if (text == "") { return ""; }
    
        var quirk = text.toUpperCase().split("");
    
        for (var i = 0; i < quirk.length; i++) {
            if (quirk[i] == "A") {
                quirk[i] = "4";
            }
    
            if (quirk[i] == "I") {
                quirk[i] = "1";
            }
    
            if (quirk[i] == "E") {
                quirk[i] = "3";
            }
    
            if (quirk[i] == "," || quirk[i] == "!" || quirk[i] == "?") {
                quirk[i] = "";
            }
        }
    
        var quirkStr = this.string_ify(quirk);
        quirkStr = quirkStr.replace(":)", ">:}");
        quirkStr = quirkStr.replace(":(", ">:{");
    
        return quirkStr;
    }

    vriska_ify(text) {
        if (text == "") { return ""; }
    
        var quirk = text.toLowerCase().split("");
    
        for (var i = 0; i < quirk.length; i++) {
            if (quirk[i] == "b") {
                quirk[i] = "8";
            }
    
            if (this.settings.Trollify.vriska.vowels && Math.random() < 0.4) {
                if (quirk[i] == "a" || quirk[i] == "e" || quirk[i] == "i" || quirk[i] == "o" || quirk[i] == "u") {
                    quirk[i] = "8";
                }
            }
        }
        quirk = quirk.toProperCase();
    
        var quirkStr = this.string_ify(quirk);
    
        if (this.settings.Trollify.vriska.words) {
            quirkStr = quirkStr.replace("ate", "8");
            quirkStr = quirkStr.replace("ait", "8");
            quirkStr = quirkStr.replace(/\bgreat\b/, "gr8");
        }
    
        return quirkStr;
    }

    equius_ify(text) {
        if (text == "") { return ""; }
        
        var quirk = text.toLowerCase().split("");
    
        for (var i = 0; i < quirk.length; i++) {
            if (quirk[i] == "x") {
                quirk[i] = "%";
            }
        }
        quirk = quirk.toProperCase();
    
        var quirkStr = this.string_ify(quirk);
    
        quirkStr = quirkStr.replace("nay", "neigh");
        quirkStr = quirkStr.replace(/loo/ig, "100");
        quirkStr = quirkStr.replace(/ool/ig, "001");
        quirkStr = quirkStr.replace(/strong/ig, "STRONG");
        quirkStr = quirkStr.replace(/strength/ig, "STRONGNESS");
        quirkStr = quirkStr.replace(/cross/ig, "%");
        
    
        return "D --> " + quirkStr;
    }

    gamzee_ify(text) {
        if (text == "") { return ""; }
        
        var quirk = text.toLowerCase().split("");
        var caps = false;
    
        for (var i = 0; i < quirk.length; i++) {
            if (quirk[i].match(/[a-z]/i)) {
                caps = !caps;
            }
    
            if (caps) {
                quirk[i] = quirk[i].toUpperCase();
            }
        }
    
        return this.string_ify(quirk);
    }

    eridan_ify(text) {
        if (text == "") { return ""; }
        
        var quirk = text.toLowerCase().split("");
    
        for (var i = 0; i < quirk.length; i++) {
            // Make sure there's no 'w's in front or back.
            if (quirk[i] == "w" && quirk[i - 1] != "w" && quirk[i + 1] != "w") {
                quirk[i] = "ww"
            }
    
            if (quirk[i] == "v" && quirk[i - 1] != "v" && quirk[i + 1] != "v") {
                quirk[i] = "vv"
            }
        }
    
        var quirkStr = this.string_ify(quirk);
    
        if (this.settings.Trollify.eridan.punctuation) {
            quirkStr.replace("ing ", "in ");
            quirkStr = quirkStr.replace(/\bwwant to\b/g, "wwanna");
            quirkStr = quirkStr.replace(/\bgoing to\b/g, "gonna");
    
            quirkStr = quirkStr.replace(/\bif\b/g, "a");
            quirkStr = quirkStr.replace(/\band\b/g, "an");
        }
    
        return quirkStr;
    }

    feferi_ify(text) {
        if (text == "") { return ""; }
        
        var quirk = text;
        quirk.replace(":)", "38D");
    
        if (this.settings.Trollify.feferi.fishpuns) {
            quirk = quirk.toFishPuns();
            
            // while (true) {
            //     quirk.replace("YOU'RE A KID", "YOU'RE A SQUID");
            //     quirk.replace("YOU'RE A SQUID", "YOU'RE A KID");
            // }
        }
        quirk = quirk.split("");
    
        for (var i = 0; i < quirk.length; i++) {
            if (quirk[i] == "H" || quirk[i] == "h") {
                quirk[i] = ")(";
            }
    
            if (quirk[i] == "E") {
                quirk[i] = "-E";
            }
        }
    
        return this.string_ify(quirk);
    }

    // END QUIRK-IFY

    getName() { return "Trollify"; }
    getDescription() {
        return "Trollify -- Converts all your text to have a typing quirk\r\n";
    }
    getVersion() { return "0.5"; }
    getAuthor() { return "TeamGameRevolution"; }

    constructor() {
        this.defaultQuirks = {
            Aradia: this.aradia_ify,
            Tavros: this.tavros_ify,
            Sollux: this.sollux_ify,
            Karkat: this.karkat_ify,
            Nepeta: this.nepeta_ify,
            Kanaya: this.kanaya_ify,
            Terezi: this.terezi_ify,
            Vriska: this.vriska_ify,
            Equius: this.equius_ify,
            Gamzee: this.gamzee_ify,
            Eridan: this.eridan_ify,
            Feferi: this.feferi_ify
        };
        this.classesDefault = {
            chat: "chat-3bRxxu",
            searchBar: "searchBar-2_Yu-C",
            messagesWrapper: "messagesWrapper-3lZDfY"
        };
        this.classesNormalized = {
            appMount: "da-appMount",
            chat: "da-chat",
            searchBar: "da-searchBar",
            messagesWrapper: "da-messagesWrapper"
        };
        this.classes = this.classesDefault;
        this.defaultSettings = {
            Trollify: {
                useNormalizedClasses: true,
                selectedTroll: "Vriska",
                aradia: {
                    dead: true
                },
                sollux: {
                    dead: false
                },
                nepeta: {
                    catpuns: true
                },
                vriska: {
                    words: true,
                    vowels: false
                },
                eridan: {
                    punctuation: true
                },
                feferi: {
                    fishpuns: true
                }
            }
        };
    }

    updateClasses() {
        let cfg = global.bdSettings;
        let opt = "fork-ps-4";
        this.classes = (cfg
            && ((cfg.stable && cfg.stable.settings[opt])
                || (cfg.settings && cfg.settings[opt]))
            && this.settings.Trollify.useNormalizedClasses)
            ? this.classesNormalized
            : this.classesDefault;
    }

    getSettingsPanel() {
        var panel = new ZLibrary.Settings.SettingPanel(() => {
            this.saveSettings.bind(this)();
        });
        this.generateSettings(panel);
        return panel.getElement();
    }

    makeDropdownItems() {
        var drop = [];
        for(var key in this.defaultQuirks) {
            drop.push({label: key, value: key});
        }
        return drop;
    }

    generateSettings(panel) {
        let config = this.settings.Trollify;
        new ZLibrary.Settings.SettingGroup("General Settings", {
            shown: true,
            callback: () => {this.saveSettings.bind(this)();}
        }).appendTo(panel).append(
            new ZLibrary.Settings.Switch("Use normalized classes", "Makes this plugin more persistent across updates", config.useNormalizedClasses, 
                (checked) => config.useNormalizedClasses = checked),
            new ZLibrary.Settings.Dropdown("Current Troll", "Select the troll with your desired typing quirk", config.selectedTroll, 
                this.makeDropdownItems(), (value) => {
                    config.selectedTroll = value;
            })
        );
        var troll = new ZLibrary.Settings.SettingGroup("Troll-specific settings", {
            shown: true,
            callback: () => {this.saveSettings.bind(this)();}
        }).appendTo(panel).append(
            new ZLibrary.Settings.SettingGroup("Aradia", {callback: () => {this.saveSettings.bind(this)();}}).append(
                new ZLibrary.Settings.Switch("Use dead Aradia's quirk", "Replaces o with 0 and randomly says ribbit", config.aradia.dead,
                (checked) => config.aradia.dead = checked)
            ),
            new ZLibrary.Settings.SettingGroup("Sollux", {callback: () => {this.saveSettings.bind(this)();}}).append(
                new ZLibrary.Settings.Switch("Use dead Sollux's quirk", "Replaces o with 0 and randomly says ribbit", config.sollux.dead,
                (checked) => config.sollux.dead = checked)
            ),
            new ZLibrary.Settings.SettingGroup("Nepeta", {callback: () => {this.saveSettings.bind(this)();}}).append(
                new ZLibrary.Settings.Switch("Use cat puns", "Replaces certain words with cat puns", config.nepeta.catpuns,
                (checked) => config.nepeta.catpuns = checked)
            ),
            new ZLibrary.Settings.SettingGroup("Vriska", {callback: () => {this.saveSettings.bind(this)();}}).append(
                new ZLibrary.Settings.Switch("Replace words", "Replaces words like great with gr8", config.vriska.words,
                (checked) => config.vriska.words = checked),
                new ZLibrary.Settings.Switch("Replace vowels", "Replaces random vowels with 8", config.vriska.vowels,
                (checked) => config.vriska.vowels = checked)
            ),
            new ZLibrary.Settings.SettingGroup("Eridan", {callback: () => {this.saveSettings.bind(this)();}}).append(
                new ZLibrary.Settings.Switch("Use short words", "Replaces want to with wanna, going to with gonna etc", config.eridan.punctuation,
                (checked) => config.eridan.punctuation = checked)
            ),
            new ZLibrary.Settings.SettingGroup("Feferi", {callback: () => {this.saveSettings.bind(this)();}}).append(
                new ZLibrary.Settings.Switch("Use fish puns", "Replaces certain words with fish puns", config.feferi.fishpuns,
                (checked) => config.feferi.fishpuns = checked)
            )
        );
    }

    loadSettings() {
        this.log("Loading settings...")
        this.settings = ZLibrary.PluginUtilities.loadSettings(this.getName(), this.defaultSettings);
        this.updateClasses();
    }

    saveSettings() {
        this.log("Saving settings...");
        ZLibrary.PluginUtilities.saveSettings(this.getName(), this.settings);
        this.updateClasses();
    }

    load() {
        this.log("Loaded Trollify!");
    }

    start() {
        let libraryScript = document.getElementById("ZLibraryScript");
        if (!libraryScript || !window.ZLibrary) {
            if (libraryScript) libraryScript.parentElement.removeChild(libraryScript);
            libraryScript = document.createElement("script");
            libraryScript.setAttribute("type", "text/javascript");
            libraryScript.setAttribute("src", "https://rauenzi.github.io/BDPluginLibrary/release/ZLibrary.js");
            libraryScript.setAttribute("id", "ZLibraryScript");
            document.head.appendChild(libraryScript);
        }

        this.initialized = false;
        if (window.ZLibrary) this.initialize();
        else libraryScript.addEventListener("load", () => { this.initialize(); });
        setTimeout(this.initialize.bind(this), 5000);
    }

    stop() {
        $('.' + this.classes.chat + ' textarea').off('keydown.trollify');
    }

    log(text) {
        return console.log(`[%c${this.getName()}%c] ${text}`,
            'color: #F77; text-shadow: 0 0 1px black, 0 0 2px black, 0 0 3px black;', '');
    }

    error(text) {
        try {
            // PluginUtilities.showToast(`[${this.getName()}] Error: ${text}`, {type:'error'});
            ZLibrary.Toasts.error(`[${this.getName()}] Error: ${text}`);
        }
        catch (err) {}
        return console.error(`[%c${this.getName()}%c] ${text}`,
            'color: #F77; text-shadow: 0 0 1px black, 0 0 2px black, 0 0 3px black;', '');
    }

    observer({ addedNodes, removedNodes }) {
        if (!this.classes || !addedNodes || !addedNodes[0] || !addedNodes[0].classList) return;
        let cl = addedNodes[0].classList;

        if (cl.contains(this.classes.searchBar)
            || cl.contains(this.classes.chat)
            || cl.contains(this.classes.messagesWrapper)) {
            this.update();
        }
    }

    // Called when a message is received
    onMessage() {}

    // Called when a server or channel is switched
    onSwitch() {}

    initialize() {
        this.log("Initializing...");
        if(this.initialized) return;
        this.initialized = true;
        this.loadSettings();

        try {
            ZLibrary.PluginUpdater.checkForUpdate(this.getName(), this.getVersion(),
                "https://raw.githubusercontent.com/TeamGameRevolution/BetterDiscordAddons/master/Trollify.plugin.js");
        }
        catch (err) {
            this.error("Couldn't check for updates.");
        }
    }

    update() {
        let textArea = $('.' + this.classes.chat + ' textarea');
        if (!textArea.length) return;

        let inputBox = textArea[0];
        textArea.off('keydown.trollify').on('keydown.trollify', (e) => {
            if ((e.which == 13) && inputBox.value) {
                let cursorPos = inputBox.selectionEnd;
                let value = inputBox.value;
                let tailLen = value.length - cursorPos;

                let regex = /\}\}((?:(?!}}).)*?)\{\{/g;
                if(!regex.test(value)) return;
                value = value.replace(regex, this.defaultQuirks[this.settings.Trollify.selectedTroll].bind(this)(value));
                //var selectedFunction = this.defaultQuirks[this.settings.Trollify.selectedTroll].bind(this);
                //value = selectedFunction(value);
                if(value.length > 2000) {
                    ZLibrary.Toasts.error("This message would exceed the 2000-character limit!\nPlease shorten your message a little, boy!\n\nMessage length (after quirk-ify): " + value.length);
                    e.preventDefault();
                    return;
                }
                inputBox.focus();
                inputBox.select();
                document.execCommand("insertText", false, value);
            }
        });

        this.initialized = true;
    }
}
