from robot import run_cli, rebot_cli

if __name__ == "__main__":
    rebot_cli([
        "--prerebotmodifier", "ModificationChecker:./target.txt:out",
        "-P", "./tests",
        "-P", "./",
        "-d", "./rebot_out",
        "./rebot_out/output.xml"
        ], exit=False
    )

# common = ['--log', 'none', '--report', 'none'] + sys.argv[1:] + ['login']
# run_cli(['--name', 'Firefox', '--variable', 'BROWSER:Firefox', '--output', 'out/fx.xml'] + common, exit=False)
# run_cli(['--name', 'IE', '--variable', 'BROWSER:IE', '--output', 'out/ie.xml'] + common, exit=False)
# rebot_cli(['--name', 'Login', '--outputdir', 'out', 'out/fx.xml', 'out/ie.xml'])


