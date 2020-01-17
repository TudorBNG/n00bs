package game.converter.dto;

public class ViewExtendedGameDTO {
    private Long id;
    private String name;
    private String company;
    private String platform;
    private String generes;

    public ViewExtendedGameDTO(Long id, String name, String company, String platform, String generes) {
        this.id = id;
        this.name = name;
        this.company = company;
        this.platform = platform;
        this.generes = generes;
    }

    public String getPlatform() {
        return platform;
    }

    public void setPlatform(String platform) {
        this.platform = platform;
    }

    public String getGeneres() {
        return generes;
    }

    public void setGeneres(String generes) {
        this.generes = generes;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }
}
