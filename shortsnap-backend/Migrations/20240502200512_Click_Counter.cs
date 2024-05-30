using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace shortsnap_backend.Migrations
{
    /// <inheritdoc />
    public partial class Click_Counter : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ClickCounter",
                table: "Urls",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ClickCounter",
                table: "Urls");
        }
    }
}
