import { networkStatus, Connection } from ".";

describe("Network", () => {
  describe("networkStatus", () => {
    it("should return none", () => {
      // Arrange
      (window as any).navigator.connection = {}

      // Act
      const result = networkStatus();

      // Assert
      expect(result).toBe(Connection.none);
    });

    it("should return effectiveType", () => {
      // Arrange
      (window as any).navigator.connection = {
        effectiveType: Connection["3g"]
      }

      // Act
      const result = networkStatus();

      // Assert
      expect(result).toBe(Connection["3g"]);
    });
  });
});