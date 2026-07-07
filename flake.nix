{
  description = "resume";
  inputs.nixpkgs.url = "github:nixos/nixpkgs/26.05";

  outputs = {
    self,
    nixpkgs,
    flake-utils,
  }:
    flake-utils.lib.eachDefaultSystem (system: let
      pkgs = import nixpkgs {inherit system;};
    in {
      devShell = pkgs.mkShell {
        buildInputs = [
          pkgs.nodejs_22
        ];
      };

      packages.default = pkgs.buildNpmPackage {
        name = "resume";

        buildInputs = with pkgs; [
          nodejs_22  # меняем с 24 на 22
        ];

        src = self;

        npmDepsHash = "sha256-IzgpSkaAuLpeQi5thTRjGmwWIdrlY1HLCdUkPAb484A=";

        npmBuild = "npm run build";

        installPhase = ''
          mkdir -p $out
          cp -r docs/* $out/
        '';
      };
    });
}
